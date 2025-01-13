import Image from "next/image";
import { FaPaperPlane, FaUsers, FaLock } from "react-icons/fa"; // Import icons

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      {" "}
      {/* Added font */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to ChatSync! </h1>
          <p className="text-xl mb-8">
            Experience seamless communication with our intuitive chat app.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-blue-500 py-3 px-6 rounded-lg font-medium hover:bg-blue-100 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="mx-auto px-8 py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
              {" "}
              {/* Flex column and center */}
              <FaPaperPlane className="text-4xl text-blue-500 mb-4" />{" "}
              {/* Icon here */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Instant Messaging
              </h3>
              <p className="text-gray-600">
                Send and receive messages in real-time.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
              {" "}
              {/* Flex column and center */}
              <FaUsers className="text-4xl text-green-500 mb-4" />{" "}
              {/* Icon here */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Group Chats
              </h3>
              <p className="text-gray-600">
                Create groups and connect with multiple people.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
              {" "}
              {/* Flex column and center */}
              <FaLock className="text-4xl text-red-500 mb-4" />{" "}
              {/* Icon here */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Secure Encryption
              </h3>
              <p className="text-gray-600">
                Your conversations are protected with end-to-end encryption.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-gray-800 py-14 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8">
            Download ChatSync today and start chatting!
          </p>
          <button className="bg-white text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Home - ChatSync",
  description: "",
};
