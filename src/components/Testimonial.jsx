const Testimonial = () => {
    const testimonials = [
      {
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Emily Carter",
        title: "CEO, TechWave",
        description:
          "Working with this team has been an absolute delight. Their professionalism and dedication are unmatched.",
      },
      {
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "John Smith",
        title: "Marketing Manager, BrightIdeas",
        description:
          "I've seen incredible results in our campaigns. Their creative solutions made a big difference for us.",
      },
      {
        image: "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Sophia Johnson",
        title: "Founder, InnovateX",
        description:
          "They exceeded my expectations with their attention to detail and excellent customer support.",
      },
    ];
  
    return (
      <div className="w-full bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{testimonial.title}</p>
              <p className="text-gray-600 text-center">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  