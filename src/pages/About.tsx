
import principalImage from "../assets/principalImage.jpg";
import schoolBuilding from "../assets/school-hero.jpg";
import missionImage from "../assets/missionImage.jpeg";
import visionImage from "../assets/ourVission.jpg";

const About = () => {
  return (
    <main className="bg-secondary text-primary font-body">
      {/* Hero Banner */}
      <section
        className="relative h-100 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${schoolBuilding})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-3xl md:text-4xl font-heading font-bold">
          About Us
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* School History */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={schoolBuilding}
            alt="School Building"
            className="w-full md:h-90 md:w-1/2 rounded-lg shadow-lg  hover:scale-105 transition-transform duration-300"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-heading font-bold mb-4">School History</h2>
            <p className="text-sm md:text-md text-gray-600 leading-6 font-semibold">
              BrightPath Academy was established in 2005 with the vision of providing
              quality education to nurture future leaders. Over the years, we have
              grown into a modern institution recognized for excellence in academics
              and extracurricular activities.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, necessitatibus delectus, magnam officiis accusantium veniam, consequuntur repellendus ducimus accusamus ullam dignissimos. Illum voluptate fugiat quis voluptates quo a accusantium veniam.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid gap-8">

          {/* Vision */}
          <div className=" rounded-xl  p-6 flex flex-col md:flex-row-reverse items-center gap-6">
            <img
              src={visionImage}
              alt="Vision"
              className="w-full md:h-90 md:w-1/2 rounded-lg shadow-lg  hover:scale-105 transition-transform duration-300"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-sm md:text-md leading-6 font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium qui, esse odio eius fugiat nemo dignissimos, tempore rem deserunt iure asperiores voluptatum, doloremque repellendus! Est, qui debitis. Facere itaque quod error incidunt eveniet et modi quaerat sed explicabo numquam. Ducimus!
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="rounded-xl  p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src={missionImage}
              alt="Mission"
              className="w-full md:h-90 md:w-1/2 rounded-lg shadow-lg  hover:scale-105 transition-transform duration-300"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-sm md:text-md leading-6 font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi accusamus iste praesentium odit recusandae corporis reprehenderit aspernatur fuga placeat quisquam, ducimus rerum repellat alias et consequuntur modi autem. Asperiores voluptatum quas, iste totam praesentium harum sunt? Magni, reprehenderit quod beatae sit ullam nobis recusandae, temporibus minima optio error odit!
              </p>
            </div>
          </div>


        </section>

        {/* Principal’s Message */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={principalImage}
            alt="Principal"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">Principal’s Message</h2>
            <p className="text-gray-700 text-sm md:text-md leading-6 font-semibold">
              Welcome to BrightPath Academy! Our goal is to provide an environment
              where students can excel academically and personally. We believe in
              nurturing curiosity, creativity, and character in every child.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-3">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Achievements
          </h2>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* Achievement 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="https://st.focusedcollection.com/17445926/i/1800/focused_347746105-stock-photo-student-boy-holding-trophy.jpg" alt="Academic Excellence" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-heading font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-700 text-sm">
                Top-ranked school in regional academic competitions.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="https://risingnepaldaily.com/storage/media/28640/chamnp.jpg" alt="Sports Champions" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-heading font-semibold mb-2">Sports Champions</h3>
              <p className="text-gray-700 text-sm">
                Winner of multiple sports championships.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2018/entertainment/lead-15022018082902.jpg" alt="Arts & Culture" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-heading font-semibold mb-2">Arts & Culture</h3>
              <p className="text-gray-700 text-sm">
                Recognized for excellence in arts and cultural programs.
              </p>
            </div>

            {/* Achievement 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="https://i0.wp.com/merrylandcollege.edu.np/wp-content/uploads/2024/11/Merryland-First-Term-Exam-2081.jpg?fit=2048%2C1536&ssl=1" alt="Board Exams" className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-heading font-semibold mb-2">Board Exams</h3>
              <p className="text-gray-700 text-sm">
                100% pass rate in board exams for the last 5 years.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
