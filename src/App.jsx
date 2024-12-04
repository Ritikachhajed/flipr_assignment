import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BlogList from "./components/Blog/BlogList";
import BlogDetail from "./components/Blog/BlogDetail";
import ProjectList from "./components/Projects/ProjectList";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      date: "2024-12-01",
      category: "Tech",
      image:
        "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 2,
      title: "Blog Post 2",
      date: "2024-12-02",
      category: "Lifestyle",
      image:
        "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 3,
      title: "Blog Post 3",
      date: "2024-12-03",
      category: "Travel",
      image:
        "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 4,
      title: "Blog Post 4",
      date: "2024-12-04",
      category: "Health",
      image:
        "https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 5,
      title: "Blog Post 5",
      date: "2024-12-05",
      category: "Education",
      image:
        "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 6,
      title: "Blog Post 6",
      date: "2024-12-06",
      category: "Tech",
      image:
        "https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 7,
      title: "Blog Post 7",
      date: "2024-12-07",
      category: "Food",
      image:
        "https://fastly.picsum.photos/id/87/1280/960.jpg?hmac=tyU21LuCEO1qRepY4GnT9gGkfKbvY__ZrZYg_JxZxI8",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 8,
      title: "Blog Post 8",
      date: "2024-12-08",
      category: "Travel",
      image:
        "https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 9,
      title: "Blog Post 9",
      date: "2024-12-09",
      category: "Lifestyle",
      image:
        "https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 10,
      title: "Blog Post 10",
      date: "2024-12-10",
      category: "Tech",
      image:
        "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 11,
      title: "Blog Post 11",
      date: "2024-12-11",
      category: "Health",
      image:
        "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 12,
      title: "Blog Post 12",
      date: "2024-12-12",
      category: "Finance",
      image:
        "https://fastly.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 13,
      title: "Blog Post 13",
      date: "2024-12-13",
      category: "Travel",
      image:
        "https://fastly.picsum.photos/id/87/1280/960.jpg?hmac=tyU21LuCEO1qRepY4GnT9gGkfKbvY__ZrZYg_JxZxI8",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 14,
      title: "Blog Post 14",
      date: "2024-12-14",
      category: "Tech",
      image:
        "https://fastly.picsum.photos/id/87/1280/960.jpg?hmac=tyU21LuCEO1qRepY4GnT9gGkfKbvY__ZrZYg_JxZxI8",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
    {
      id: 15,
      title: "Blog Post 15",
      date: "2024-12-15",
      category: "Education",
      image:
        "https://fastly.picsum.photos/id/121/1600/1067.jpg?hmac=QDrnlQAvC_54xDpx2afpzKMbjCZvnRljseYvkK8XPCQ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis praesentium assumenda iure sapiente iusto iste expedita minus unde repellendus inventore error porro, reprehenderit eum corrupti aliquam illum deserunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium excepturi, commodi ipsum, qui culpa nulla nihil veritatis ipsa modi molestiae magni impedit? Recusandae vel corporis tempora vitae error corrupti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptate quidem eos inventore amet odio animi blanditiis expedita recusandae eius debitis. Deleniti voluptas pariatur itaque illum incidunt tempora ipsum explicabo?",
    },
  ];
  const shuffleBlogs = (blogs) => blogs.sort(() => Math.random() - 0.5);
  const recentBlogsShuffled = shuffleBlogs([...blogs]);
  const upperRecentBlogs = recentBlogsShuffled.slice(0, 2);
  const lowerRecentBlogs = recentBlogsShuffled.slice(2, 5);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      {/* Display Header on the Blog List page */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <BlogList
                blogs={blogs}
                upperRecentBlogs={upperRecentBlogs}
                lowerRecentBlogs={lowerRecentBlogs}
              />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetail
              blogs={blogs}
              upperRecentBlogs={upperRecentBlogs}
              lowerRecentBlogs={lowerRecentBlogs}
            />
          }
        />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
