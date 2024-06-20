import { useState } from "react";
import { familyTree } from "./data";

function Family() {
  return (
    <div style={{ paddingLeft: 10 }}>
      <h1>Family tree</h1>
      <FamilyMember member={familyTree} />
    </div>
  );
}
function FamilyMember({ member }) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ paddingLeft: 10 }}>
      <span onClick={expand} style={{ cursor: "pointer" }}>
        {member.name}
      </span>
      {isVisible && member.children && (
        <div style={{ paddingLeft: 10 }}>
          {member.children.map((child, index) => (
            <FamilyMember key={index} member={child} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Family;
