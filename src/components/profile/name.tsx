export default function Name() {
  return (
    <div>
      <div className="flex flex-col text-center md:text-start">
        <h1 className="text-5xl font-black">
          Hi! I&apos;m
          <br /> Mohammad <br /> Alkhalifah
        </h1>
        <p className="text-lg">Software Developer</p>
        <p className="bg-white p-2 text-lg text-black md:w-fit">
          Currently working at{" "}
          <a
            className="text-red hover:underline hover:decoration-white hover:decoration-2"
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
