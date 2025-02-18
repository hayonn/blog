import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Home";
import PostPage from "./pages/Post";
import TagPage from "./pages/Tags";
import ArchivePage from "./pages/Archive";
import TagDetailPage from "./pages/TagDetail";
import CategoryDetailPage from "./pages/CategoryDetail";
import GuestBookPage from "./pages/GuestBook";
import Navigation from "@/components/Common/Navigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation/>
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<IndexPage/>} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/tag" element={<TagPage/>} />
            <Route path="/archive" element={<ArchivePage/>} />
            <Route path="/tag/:keyword" element={<TagDetailPage/>} />
            <Route path="/category/:category" element={<CategoryDetailPage/>} />
            <Route path="/guestbook" element={<GuestBookPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;