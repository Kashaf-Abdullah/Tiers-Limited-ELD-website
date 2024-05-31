import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogsCard from "./cards/BlogsCard";
import t1 from "../assets/i1.jpg";
import { useNavigate } from "react-router-dom";

const Blogs = ({ numberOfBlogs }) => {
  const navigate = useNavigate();

  const blogsData = [
    {
      id: 1,
      image: t1,
      head: "Performance Crew Fleece",
      date: "02 March, 2023",
      text: "Short description of the blog post.",
      content:
        "Stay warm and comfortable during your workouts with our Performance Crew Fleece. Made from high-quality materials, this fleece provides superior insulation while allowing for breathability. Its sleek design ensures you look stylish both in and out of the gym. Explore the versatility of this wardrobe essential and elevate your athletic wear collection.",
    },
    {
      id: 2,
      image: t1,
      head: "Another Blog Post",
      date: "15 April, 2023",
      text: "Another short description of the blog post.",
      content:
        "Discover the latest trends and fashion tips in our newest blog post. From seasonal must-haves to timeless classics, we cover it all. Dive into the world of style and find inspiration for your next outfit or lifestyle upgrade. Stay tuned for exciting content that keeps you informed and stylish.",
    },
    {
      id: 3,
      image: t1,
      head: "Spring Fashion Trends",
      date: "10 May, 2023",
      text: "Explore the latest trends in spring fashion.",
      content:
        "Spring into style with our comprehensive guide to the latest fashion trends. From vibrant colors to lightweight fabrics, we've got you covered. Discover how to refresh your wardrobe and step into the new season with confidence. Stay ahead of the curve with our expert insights and styling tips.",
    },
    {
      id: 4,
      image: t1,
      head: "Sustainable Clothing Choices",
      date: "22 June, 2023",
      text: "How to make more sustainable choices in your wardrobe.",
      content:
        "Make a positive impact on the planet with our guide to sustainable clothing choices. Learn how to shop ethically, embrace eco-friendly materials, and extend the lifespan of your garments. Join the movement towards a greener future while still looking chic and stylish. Together, we can make a difference, one outfit at a time.",
    },
    {
      id: 5,
      image: t1,
      head: "Workout Gear Essentials",
      date: "15 July, 2023",
      text: "Essential workout gear for your fitness routine.",
      content:
        "Maximize your performance and comfort with our selection of workout gear essentials. From moisture-wicking fabrics to supportive footwear, we've curated the ultimate collection. Elevate your fitness routine and achieve your goals in style. Whether you're hitting the gym or enjoying outdoor activities, we have everything you need to succeed.",
    },
    {
      id: 6,
      image: t1,
      head: "Winter Wardrobe Tips",
      date: "05 August, 2023",
      text: "Tips to keep warm and stylish during winter.",
      content:
        "Beat the winter chill with our expert wardrobe tips. Stay cozy without sacrificing style with our layering techniques and cold-weather essentials. From statement coats to cozy knits, we have everything you need to brave the elements in style. Embrace the season with confidence and make a statement with your winter wardrobe.",
    },
    {
      id: 7,
      image: t1,
      head: "Holiday Outfit Ideas",
      date: "20 September, 2023",
      text: "Stylish outfit ideas for the holiday season.",
      content:
        "Celebrate the holiday season in style with our curated outfit ideas. From festive parties to cozy gatherings, we have the perfect ensemble for every occasion. Discover unique styling tips and trends to make this holiday season unforgettable. Spread joy and cheer with your impeccable sense of style.",
    },
    {
      id: 8,
      image: t1,
      head: "Back to School Fashion",
      date: "02 October, 2023",
      text: "Trendy back-to-school fashion ideas.",
      content:
        "Make a stylish statement as you head back to school with our trendy fashion ideas. From casual cool to campus chic, we've got looks that will turn heads on the first day and beyond. Discover the latest trends and must-have pieces to refresh your wardrobe for the new academic year. Start the semester with confidence and style.",
    },
  ];

  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog.id}`, { state: { blog } });
  };

  // Select the number of blogs to display based on the prop
  const blogsToDisplay = blogsData.slice(0, numberOfBlogs);

  return (
    <Container className="product-cards">
      <h4 className="sec-title">
        Trusted by fleets of all sizes
        <br />
        across all industries
      </h4>
      <Row
        className="justify-content-between prod-card"
        style={{ margin: "4rem 0" }}
      >
        <Col className="d-flex justify-content-center align-items-center">
          <h3>Latest News</h3>
          <p className="text">
            Trusted by fleets of all sizes across all industries
          </p>
        </Col>
        {blogsToDisplay.map((blog) => (
          <BlogsCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            head={blog.head}
            date={blog.date}
            text={blog.text}
            onClick={() => handleBlogClick(blog)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
