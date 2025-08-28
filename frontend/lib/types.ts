// src/lib/types.ts

// =======================
// === CORE API & PAGINATION TYPES ===
// =======================

/**
 * A generic type for paginated API responses.
 * @template T - The type of the data items in the `data` array.
 */
export interface PaginatedApiResponse<T> {
  data: T[];
  meta: {
    total: number;
    currentPage: number;
    totalPages: number;
    perPage: number;
  };
}


// =======================
// === COMPANY & JOB TYPES ===
// =======================

/**
 * ✅ UNIFIED Company Type. This is the single source of truth for a company.
 * It combines all necessary fields from the previous duplicate definitions.
 */
export interface Company {
  id: number | string;
  name: string;
  logoUrl?: string;
  tagline?: string;
  location: string;
  industry?: string;
  website?: string;
  description?: string;
  activeJobsCount: number;
  jobs?: Job[]; // An array of associated jobs for detail views
}

/**
 * ✅ UNIFIED Job Type. This is the single source of truth for a job.
 * It merges fields from IJob and Job into a single, comprehensive interface.
 */
export interface Job {
  id: number | string;
  title: string;
  description: string;
  location: string;
  salary?: number;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  category: string;
  company?: Company; // A job can be associated with a Company
  requirements?: string[];
  postedAt: string; // ISO 8601 date string
}

/**
 * ✅ UNIFIED Application Type.
 * Defines the structure for a job application.
 */
export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  appliedAt: string; // ISO 8601 date string
  status: 'Pending' | 'Reviewed' | 'Interview' | 'Offered' | 'Rejected';
}

/**
 * Data structure for the job application form.
 */
export interface ApplicationFormData {
  coverLetter?: string;
  resumeUrl?: string; 
}

/**
 * Parameters for filtering job searches.
 */
export interface JobFilterParams {
  query?: string;
  location?: string;
  type?: string;
  category?: string;
  page?: number;
  limit?: number;
}


// =======================
// === USER & PROFILE TYPES ===
// =======================

/**
 * Data structure for a user's profile.
 */
export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  location?: string;
  headline?: string;
  summary?: string;
  cvUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string; // ISO 8601 date string
  endDate?: string;  // ISO 8601 date string or null for current
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string; // ISO 8601 date string
  endDate?: string;  // ISO 8601 date string
}

export interface Skill {
  id: string | number;
  name: string;
}


// =======================
// === BLOG TYPES ===
// =======================

/**
 * Data structure for a blog post after transformation for the UI.
 * Uses camelCase for consistency.
 */
export interface BlogPost {
  id: number | string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  authorName: string;
  authorAvatarUrl?: string;
  publishedAt: Date;
  readingTimeMinutes: number;
}

/**
 * Parameters for fetching a list of blog posts.
 */
export interface GetBlogPostsParams {
  page?: number;
  limit?: number;
  category?: string;
  searchQuery?: string;
  sortBy?: 'published_at' | 'title';
  order?: 'asc' | 'desc';
}


// =======================
// === COMMUNITY TYPES ===
// =======================

export interface CommunityAuthor {
  id: string;
  name: string;
  avatarUrl: string;
  title: string;
}

export interface CommunityTag {
  id: number;
  name: string;
  slug: string;
}

export interface CommunityThread {
  id: string;
  title: string;
  author: CommunityAuthor;
  tags: CommunityTag[];
  contentSnippet: string;
  stats: {
    replies: number;
    views: number;
    likes: number;
  };
  createdAt: string; // ISO 8601 date string
  lastActivityAt: string; // ISO 8601 date string
}

export interface CommunityApiResponse {
  threads: CommunityThread[];
  topMembers: CommunityAuthor[];
  popularTags: CommunityTag[];
}