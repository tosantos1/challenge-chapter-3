import { GetStaticProps } from 'next';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import { FiCalendar, FiUser } from "react-icons/fi";


interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <h1>Como utilizar Hooks</h1>
        <p>Pesando em sincronização em vez de clicos de vida.</p>
        <div className={styles.datamember}>
          <p><FiCalendar /> <span> 15 Mar 2021 </span></p>
          <p><FiUser /> <span> Tiago Oliveira </span></p>
        </div>
      </div>
    </main>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
