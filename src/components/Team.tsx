import headshotImg from "../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";

type MemberProps = {
  name: string;
  designation: string;
  bio: string;
  imageUrl: string;
};

function TeamMember({ name, designation, bio, imageUrl }: MemberProps) {
  return (
    <div className="flex gap-5 items-center justify-center bg-blue-100 p-4 rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-96 h-auto object-contain rounded-xl"
          src={imageUrl}
          alt={`${name}`}
        />
        <div>
          <h3 className="text-center text-md tracking-tight font-bold">{name}</h3>
          <p className="text-center text-sm text-gray-600">{designation}</p>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm text-gray-600 mt-1 text-left">{bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const teamMembers: MemberProps[] = [
    {
      name: "John Smith",
      designation: "Designation here",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: headshotImg, // Update with actual image path
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: headshotImg, // Update with actual image path
    },
    {
      name: "John Smith",
      designation: "Designation here",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: headshotImg, // Update with actual image path
    },
  ];

  return (
    <section className="bg-white p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-left">Team</h2>
      <p className="text-left text-lg text-gray-600 mt-2 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div className="flex flex-col justify-center items-start gap-5 p-4">
        {teamMembers.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}
