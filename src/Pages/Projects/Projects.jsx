import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import "./Projects.scss";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../Components/firebase/firebase";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loadingLikes, setLoadingLikes] = useState(false);
  const [projects, setProjects] = useState([]);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  });

  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleLikeToggle = async (event, projectIndex, id) => {
    event.stopPropagation();
    setLoadingLikes(true);
    const docRef = doc(db, "Projects", id);
    const results = await getDoc(docRef);
    const firebaseProject = results.data();
    const updatedProject = projects.find(
      (project) => project.id == firebaseProject.id
    );
    updatedProject.liked = !updatedProject.liked;
    updatedProject.likes = updatedProject.liked
      ? updatedProject.likes + 1
      : updatedProject.likes - 1;

    firebaseProject.likes = updatedProject.liked
      ? firebaseProject.likes + 1
      : firebaseProject.likes - 1;
    await updateDoc(docRef, firebaseProject);
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[projectIndex] = updatedProject;
      setLoadingLikes(false);
      return updatedProjects;
    });
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsSnapshot = await getDocs(collection(db, "Projects"));
        const projectsData = projectsSnapshot.docs.map((doc) => doc.data());
        const sortedProjectsData = projectsData.sort((a, b) => a.sNo - b.sNo);
        setProjects(sortedProjectsData);
      } catch (error) {
        console.error("Error fetching projects from Firebase:", error);
      }
    };
    fetchProjects();
  }, []);

  const AddProjects = async (project) => {
    try {
      const docRef = await addDoc(collection(db, "Projects"), { ...project });
      await setDoc(docRef, { ...project });
      console.log("Project added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <section className="Projects">
      <div className="sectionContainer">
        <div className="Section-Heading">
          <h2 className={`heading projectsHeading`}>Projects</h2>
        </div>
        <div className="projectsContainer">
          {projects.length === 0 ? (
            <h1
              className={`heading projectsHeading`}
              style={{ color: "#BBCBBF" }}
            >
              Loading........
            </h1>
          ) : (
            projects.map((project, index) => {
              return (
                <div
                  onClick={() => {
                    handleModalOpen(project);
                  }}
                  target="_blank"
                  className="Project-Card"
                  key={index}
                >
                  <div className="Project-Card-Image">
                    <img src={project.img} alt="" />
                  </div>
                  <div className="projectTypeLikes">
                    <div className="project-type">{project.type}</div>
                    <div
                      className="project-likes"
                      onClick={(event) =>
                        handleLikeToggle(event, index, project.id)
                      }
                    >
                      {loadingLikes ? (
                        "Processing..."
                      ) : project.liked ? (
                        <FaHeart style={{ color: "var(--textColor4)" }} />
                      ) : (
                        <FaRegHeart />
                      )}
                      {loadingLikes ? "" : project.likes}
                    </div>
                  </div>
                  <div className="project-heading">
                    {project.name} <MdArrowOutward />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {showModal && (
        <ProjectInfo
          project={selectedProject}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};
