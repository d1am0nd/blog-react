import {
  fetchPosts,
  fetchPostBySlug,
} from '@/store/actions/postsActions';
import {fetchProjects} from '@/store/actions/projectsActions';

const mapToFetchPosts = () => fetchPosts();
const mapToFetchPostBySlug = ({slug}) => fetchPostBySlug(slug);
const mapToFetchProjects = () => fetchProjects();

export {
  mapToFetchPosts,
  mapToFetchPostBySlug,
  mapToFetchProjects,
};
