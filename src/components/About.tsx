import Card from "./Card";
import cardImg1 from "../assets/kanchanara-GnWfl_nnZro-unsplash.jpg";
import cardImg2 from "../assets/viktor-forgacs-3PyBkxgTiL0-unsplash.jpg";

export default function About() {
  const cards = [
    {
      bgColor: "#3491AA",
      heading: "Calculate your Profits",
      imgSrc: cardImg1,
    },
    {
      bgColor: "#FE9262",
      heading: "Calculate your tax liability",
      imgSrc: cardImg2,
    }
  ];
  return (
    <section className="bg-white p-6 rounded-xl">
      <div>
        <h2 className="text-3xl font-bold text-left">About Bitcoin</h2>
        <h2 className="text-xl font-bold text-left mt-8">What is Bitcoin?</h2>
        <p className="text-lg text-left mt-2">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <h2 className="text-xl font-bold text-left mt-8">
          Loren ipsum dolor sit amet
        </h2>
        <p className="text-lg text-left mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className="text-lg text-left mt-10">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <p className="text-lg text-left mt-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <h2 className="text-3xl font-bold text-left">
          Already Holding Bitcoin?
        </h2>
        <div className="flex items-center gap-5 justify-start overflow-auto">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              heading={card.heading}
              bgColor={card.bgColor}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <p className="text-lg text-left mt-10">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </div>
    </section>
  );
}
