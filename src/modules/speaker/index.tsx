export default function Widget() {
  return (
    <div className="bg-white p-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src="https://placehold.co/200x200"
            alt="Speaker 1"
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Mike Wykoski</h3>
          <p className="text-sm text-zinc-500 mb-2">Co-founder Dream Team</p>
          <div className="flex space-x-2">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://placehold.co/200x200"
            alt="Speaker 2"
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Zara Johnson</h3>
          <p className="text-sm text-zinc-500 mb-2">CEO Water Bridges</p>
          <div className="flex space-x-2">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://placehold.co/200x200"
            alt="Speaker 3"
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Henry Steve</h3>
          <p className="text-sm text-zinc-500 mb-2">
            Founder & CEO Cinder Inc.
          </p>
          <div className="flex space-x-2">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://placehold.co/200x200"
            alt="Speaker 4"
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Lara James</h3>
          <p className="text-sm text-zinc-500 mb-2">Founder & CEO Fire Myth</p>
          <div className="flex space-x-2">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Speskers = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-center mb-10">Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
    </section>
  );
};

export { Speskers };
