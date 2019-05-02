import {
  fetchPosts,
  fetchPostBySlug,
} from '@/store/actions/postsActions';
import {fetchProjects} from '@/store/actions/projectsActions';

export const mapToFetchPosts = () => fetchPosts();
export const mapToFetchPostBySlug = ({slug}) => fetchPostBySlug(slug);
export const mapToFetchProjects = () => fetchProjects();
