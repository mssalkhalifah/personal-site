export default function Name() {
  return (
    <div className="flex flex-col place-items-center space-y-2 text-center lg:place-items-start lg:text-start">
      <h1 className="text-2xl font-black sm:text-3xl md:text-5xl lg:text-6xl">
        Hi!
        <br />
        I&apos;m Mohammad, <br /> Web Developer
      </h1>
      <p className="text-lg text-zinc-200 lg:text-2xl">
        NextJs | ReactJs | NodeJs
      </p>
      <div className="max-w-sm rounded-md bg-black p-2 text-center align-middle text-base shadow-md md:text-lg">
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
      </div>
    </div>
  );
}
