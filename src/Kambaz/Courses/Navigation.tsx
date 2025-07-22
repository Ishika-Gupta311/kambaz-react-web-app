
import { ListGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

export default function CourseNavigation() {
  // grab the same “cid” param you defined in your Routes
  const { cid } = useParams<{ cid: string }>();

  // just an array of labels—no hardcoding of JSX
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd fs-5 rounded-0 bg-white"
    >
      {links.map((label) => {
        // build each URL from the current course ID + label
        const to = `/Kambaz/Courses/${cid}/${label}`;
        // only “Home” should use exact matching
        const end = label === "Home";

        return (
          <NavLink
            key={label}
            to={to}
            end={end}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }: { isActive: boolean }) => (
              <ListGroup.Item
                id={`wd-course-${label.toLowerCase()}-link`}
                className={[
                  "list-group-item",
                  "list-group-item-action",
                  "w-100",
                  "py-3",
                  "border-0",
                  "bg-white",
                  // exactly your original styling:
                  isActive
                    ? "text-dark border-start border-3 border-dark"
                    : "text-danger",
                ].join(" ")}
              >
                {label}
              </ListGroup.Item>
            )}
          </NavLink>
        );
      })}
    </ListGroup>
  );
}
