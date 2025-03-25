import React from 'react';

const reviews = [
  {
    text: "Onome is a driven, efficient teammate who fosters collaboration and excels in leadership.",
    author: "Laura Burns",
    title: "Application Consultant"
  },
  {
    text: "Onome has made a remarkable impact in her first year, excelling in challenging environments and building strong relationships with stakeholders.",
    author: "Armand Gillard",
    title: "Application Developer Lead Consultant"
  },
  {
    text: "Onome has shown exceptional attitude, technical ability, and determination in handling a complex, critical project, working effectively and driving progress through challenges.",
    author: "Thomas Gallagher",
    title: "IT Infrastructure Lead Consultant"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-white py-16 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">End of Year Review</h2>
          <p className="text-lg text-gray-700">
            This has been an incredible journey of growth and development. Here are some of the Reviews:
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-6">What My Teammates Say</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="text-lg text-gray-900 font-semibold">{review.author}</p>
                <p className="text-sm text-gray-600">{review.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden text-center p-6">
          <div className="w-full sm:w-1/3 mx-auto mb-4">
            <img
              src="images/Pre.jpeg"
              alt="Award ceremony where I won the Best Presentation Award"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-2">Best Presentation Award – 2024 Graduate Cohort</h3>
          <p className="text-lg text-gray-700">
            On Wednesday, March 27th, I had the honor of presenting as part of the 2024 Graduate Cohort. After sharing my journey and experiences over the past 6 months, I was thrilled to receive the Best Presentation Award. It was an incredible opportunity to showcase my work alongside other talented graduates, and being recognized for my efforts was truly rewarding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
