export default function Name() {
  return (
    <div>
      <div className="flex flex-col text-center md:text-start">
        <h1 className="text-7xl font-black">
          Hi!
          <br />
          I&apos;m Mohammad, <br /> Web Developer
        </h1>
        <p className="my-2 text-2xl text-zinc-200">NextJs | ReactJs | NodeJs</p>
        <p className="w-[390px] rounded-md bg-black p-2 text-center align-middle text-lg shadow-md">
          Currently working at{" "}
          <a
            className="text-red-500 hover:underline hover:decoration-white hover:decoration-2"
            href="https://www.mis.com.sa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIS
          </a>{" "}
          as System Developer
        </p>
      </div>
    </div>
  );
}
