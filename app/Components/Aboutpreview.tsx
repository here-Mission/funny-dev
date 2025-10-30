const AboutPreview = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">
        👋 About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-gray-900 p-8 rounded-lg shadow-md">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Hey, I'm Sumit 👋
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
          <a
            href="/about"
            className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
