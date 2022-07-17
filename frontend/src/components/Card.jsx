import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton, createIcon } from "@chakra-ui/react";
import ViewProjectModal from "./ViewProjectModal";

const GithubIcon = createIcon({
  viewBox: "0 0 58 56",
  path: (
    <path d="M29 0C12.6875 0 0 12.6452 0 28.9032C0 47.871 17.2188 56 19.9375 56C21.75 56 21.75 55.0968 21.75 54.1935V49.6774C15.4062 51.4839 12.6875 47.871 11.7812 45.1613C11.7812 45.1613 11.7812 44.2581 9.96875 42.4516C9.0625 41.5484 5.4375 39.7419 9.0625 39.7419C11.7812 39.7419 13.5938 43.3548 13.5938 43.3548C16.3125 46.9677 19.9375 46.0645 21.75 45.1613C21.75 43.3548 23.5625 41.5484 23.5625 41.5484C16.3125 40.6452 10.875 37.9355 10.875 28C10.875 24.3871 11.7812 21.6774 13.5938 19.871C13.5938 19.871 11.7812 16.2581 13.5938 11.7419C13.5938 11.7419 18.125 11.7419 21.75 15.3548C24.4688 13.5484 33.5312 13.5484 36.25 15.3548C39.875 11.7419 44.4062 11.7419 44.4062 11.7419C46.2188 18.0645 44.4062 19.871 44.4062 19.871C46.2188 21.6774 47.125 24.3871 47.125 28C47.125 37.9355 40.7812 40.6452 34.4375 41.5484C35.3438 42.4516 36.25 44.2581 36.25 46.9677V54.1935C36.25 55.0968 36.25 56 38.0625 56C40.7812 56 58 47.871 58 28.9032C58 12.6452 45.3125 0 29 0Z" />
  ),
});

const truncate = (string, n) =>
  string?.length > n ? string.substr(0, n - 1) + "..." : string;

const Card = () => {
  return (
    <div className="px-4 py-2 border-[2px] hover:shadow-xl shadow-md transition-all hover:rotate-1  duration-150 ease-linear border-primary-500 rounded-md space-y-8 bg-white">
      <div className="space-y-2">
        <h1 className="text-3xl font-Wotfard-Bold">Planify</h1>
        <p className=" text-base font-Wotfard-Regular">
          {truncate(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sintnesciunt quibusdam similique praesentium, iusto doloribus aspernatur utblanditiis veritatis.",
            60
          )}
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex space-x-2 items-center">
          <a href="https://www.google.com" target="_blank">
            <IconButton
              aria-label="Live demo"
              icon={<ArrowForwardIcon w={5} h={5} />}
            />
          </a>

          <a href="https://www.google.com" target="_blank">
            <IconButton
              aria-label="GitHub repo"
              icon={<GithubIcon w={5} h={5} />}
            />
          </a>
        </div>
        <ViewProjectModal />
      </div>
    </div>
  );
};

export default Card;
