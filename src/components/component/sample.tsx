/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fpZiVJ3YiyJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {}

const Sample: React.FC<Props> = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-6 lg:py-10 flex flex-col items-center gap-2">
        {/* <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Full Stack Web Developer</h1>
          <p className="text-gray-500 dark:text-gray-400">Crafting beautiful web experiences</p>
        </div> */}
        <nav className="flex flex-col gap-2 sm:flex-row sm:gap-4 lg:gap-6">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About Me
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Skills
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-4 lg:grid-cols-[200px_1fr] lg:gap-12">
            <div className="mx-auto aspect-square overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              <img
                alt="Profile Picture"
                className="object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div className="space-y-4">
              <div className="grid gap-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Hi, I'm John Doe
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Full Stack Web Developer
                </p>
              </div>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm a passionate developer with a love for creating beautiful
                and functional web applications. I enjoy working with a variety
                of technologies and am always eager to learn new skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-3xl items-center gap-4 lg:gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                My Skills
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm proficient in a variety of programming languages and
                frameworks. Here are some of my top skills:
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <DribbbleIcon className="h-8 w-8 rounded-lg" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">React</h3>
                  <div className="w-[200px] h-2 rounded-lg bg-gray-100 dark:bg-gray-800" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CodepenIcon className="h-8 w-8 rounded-lg" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Next.js</h3>
                  <div className="w-[200px] h-2 rounded-lg bg-gray-200 dark:bg-gray-900" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <WindIcon className="h-8 w-8 rounded-lg" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                  <div className="w-[200px] h-2 rounded-lg bg-gray-300 dark:bg-gray-850" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TypeIcon className="h-8 w-8 rounded-lg" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">TypeScript</h3>
                  <div className="w-[200px] h-2 rounded-lg bg-gray-400 dark:bg-gray-800" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CodepenIcon className="h-8 w-8 rounded-lg" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Node.js</h3>
                  <div className="w-[200px] h-2 rounded-lg bg-gray-500 dark:bg-gray-750" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DatabaseIcon className="h-8 w-8 rounded-lg" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">MongoDB</h3>
                  <div className="w-[200px] h-2 rounded-lg bg-gray-600 dark:bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-3xl items-center gap-4 lg:gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                My Projects
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent projects. Click on a project to view
                more details.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project One</CardTitle>
                  <CardDescription>
                    Description of the project goes here. This project showcases
                    my skills in...
                  </CardDescription>
                  <div className="flex justify-between mt-4">
                    <Link className="text-blue-500 hover:underline" href="#">
                      GitHub Repo
                    </Link>
                    <Link className="text-blue-500 hover:underline" href="#">
                      Live Link
                    </Link>
                  </div>
                  <img
                    alt="Project One"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Two</CardTitle>
                  <CardDescription>
                    Description of the project goes here. This project showcases
                    my skills in...
                  </CardDescription>
                  <div className="flex justify-between mt-4">
                    <Link className="text-blue-500 hover:underline" href="#">
                      GitHub Repo
                    </Link>
                    <Link className="text-blue-500 hover:underline" href="#">
                      Live Link
                    </Link>
                  </div>
                  <img
                    alt="Project Two"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Three</CardTitle>
                  <CardDescription>
                    Description of the project goes here. This project showcases
                    my skills in...
                  </CardDescription>
                  <div className="flex justify-between mt-4">
                    <Link className="text-blue-500 hover:underline" href="#">
                      GitHub Repo
                    </Link>
                    <Link className="text-blue-500 hover:underline" href="#">
                      Live Link
                    </Link>
                  </div>
                  <img
                    alt="Project Three"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Four</CardTitle>
                  <CardDescription>
                    Description of the project goes here. This project showcases
                    my skills in...
                  </CardDescription>
                  <div className="flex justify-between mt-4">
                    <Link className="text-blue-500 hover:underline" href="#">
                      GitHub Repo
                    </Link>
                    <Link className="text-blue-500 hover:underline" href="#">
                      Live Link
                    </Link>
                  </div>
                  <img
                    alt="Project Four"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-3xl items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contact Me
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question or want to work together? Send me a message
                using the form below.
              </p>
            </div>
            <form className="grid gap-4 md:grid-cols-2">
              <Input className="w-full" placeholder="Name" type="text" />
              <Input className="w-full" placeholder="Email" type="email" />
              <Input
                className="w-full"
                placeholder="Enter your message"
                // style={{
                //   "--tw-ring-color": "rgba(123, 135, 148, 0.5)",
                // }}
                type="text"
              />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-3xl items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Download Resume
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Click the button below to download my resume.
              </p>
            </div>
            <Button className="w-full" onClick={undefined}>
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const CodepenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}
const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

const DribbbleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

const TypeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}
const WindIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
export default Sample;