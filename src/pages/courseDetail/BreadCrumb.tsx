import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BreadCrumb = ({course}) => {

  return (
    <div className="flex items-center text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <Link href="/courses" className="hover:text-primary">
        Courses
      </Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span className="text-gray-900">{course.title}</span>
    </div>
  );
};

export default BreadCrumb;
