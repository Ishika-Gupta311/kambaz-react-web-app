
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import CourseStatus from "../Home/Status";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  // grab only the modules for this course
  const courseModules = db.modules.filter((m) => m.course === cid);

  return (
    <div className="d-flex">
      {/* center column: modules list */}
      <div className="flex-fill pe-4">
        <ModulesControls />
        <hr />

        <ListGroup id="wd-modules" className="rounded-0">
          {courseModules.map((mod) => (
            <ListGroup.Item
              key={mod._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              {/* module header */}
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {mod.name}
                <span className="ms-auto">
                  <ModuleControlButtons />
                </span>
              </div>

              {/* lessons */}
              {mod.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {mod.lessons.map((lesson) => (
                    <ListGroup.Item
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1 d-flex align-items-center"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <span className="ms-auto">
                        <LessonControlButtons />
                      </span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* right column: course status */}
      <div className="d-none d-lg-block ps-4" style={{ width: 350 }}>
        <CourseStatus />
      </div>
    </div>
  );
}
