const AboutUs = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            About Us
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2">
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Welcome to our company! We are passionate about delivering
                exceptional services and solutions to meet your needs. Our team of
                dedicated professionals works tirelessly to bring innovation and
                quality to every project we undertake.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to create value for our clients and build lasting
                relationships. We pride ourselves on transparency, integrity, and
                a commitment to excellence. Thank you for choosing us as your
                trusted partner.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  