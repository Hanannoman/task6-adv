

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { postsData } from '../../data/posts';


export interface Category { name: string;color:string }
export interface Section { sectionImage: string; sectionContent: string; }
export interface Post {
  id: number;
  mainImage: string;
  title: string;
  date: string;
  description: string;
  categories: Category[];
  sections: Section[];

}

interface BlogState {
  posts: Post[];
  displayPosts: Post[];
  paginatedPosts: Post[]; 
  currentPage: number;
  postsPerPage: number
  ;
  relatedPosts: Post[]; 
   pageNumbers: (number | string)[]; 
}


const initialState: BlogState = {
  posts: postsData,
  displayPosts: [], 
  paginatedPosts: [], 
  currentPage: 1,
  postsPerPage: 6,
  relatedPosts: [],
   pageNumbers: [],
};

const generatePageNumbers = (current: number, total: number) =>
   {
  const pages: (number | string)[] = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }
  return pages;
};


const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setRecentPosts: (state) => {
  state.displayPosts = [...state.posts].sort((a, b) => b.id - a.id).slice(0, 4);
    },

   setPage: (state, action: PayloadAction<{ page: number; limit: number }>) => {
   const { page, limit } = action.payload;
   state.currentPage = page;
    state.paginatedPosts = state.posts.slice((page - 1) * limit, page * limit);
      
      state.pageNumbers = generatePageNumbers(page, Math.ceil(state.posts.length / limit));
    },
    initializeBlog: (state) => {
      state.paginatedPosts = state.posts.slice(0, state.postsPerPage);
      state.pageNumbers = generatePageNumbers(1, Math.ceil(state.posts.length / state.postsPerPage));
    },
  
  setRelatedPosts: (state, action: PayloadAction<number>) => {
    const currentPostId = action.payload;
    const currentPost = state.posts.find(p => p.id === currentPostId);
    
    if (currentPost) {
  
      state.relatedPosts = state.posts.filter(p => 
        p.id !== currentPostId && 
        p.categories.some(cat => 
          currentPost.categories.some(c => c.name === cat.name)
        )
      );
    } else {
      state.relatedPosts = [];
    }
  }
},});
export const { setRecentPosts, setPage, initializeBlog,setRelatedPosts } = blogSlice.actions;
export default blogSlice.reducer;