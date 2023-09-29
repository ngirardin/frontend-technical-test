import { headers } from "next/dist/client/components/headers";
import Link from "next/link";

type Props = {
  search?: string;
  page: number;
  total: number;
};

export default function Pagination({ search, page, total }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2">
        {Array.from({ length: total }, (_, i) => i + 1).map((pageNumber) => {
          const qs = new URLSearchParams({ page: pageNumber.toString() });

          if (search) {
            qs.set("search", search);
          }

          return (
            <Link
              className={`px-4 py-2 rounded-md ${
                pageNumber === page
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              key={pageNumber}
              href={`/?${qs.toString()}`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
