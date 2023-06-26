import Empty from "../Empty";
interface ProjectsType {
  title: string;
}
function Projects(props: ProjectsType) {
  return (
    <div className="w-54 bg-slate-200 min-h-fit rounded-sm p-1">
      <div className="border-b-2 border-red-500 ">{props?.title}</div>
      <Empty></Empty>
    </div>
  );
}

export default Projects;
