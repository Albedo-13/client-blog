import Image from "next/image";

import postThumb from "/public/images/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling.webp";

import styles from "./blog-post-content.module.scss";

export function BlogPostContent() {
  return (
    <div>
      <div className="container">
        <Image src={postThumb} className={styles.image} alt="blog post content" width={1280} height={900} />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi est nostrum. Veritatis quidem illo
          quod natus tenetur tempore aliquam placeat quasi, distinctio cupiditate nam qui cumque facere possimus ullam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi est nostrum. Veritatis quidem illo
          quod natus tenetur tempore aliquam placeat quasi, distinctio cupiditate nam qui cumque facere possimus ullam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi est nostrum. Veritatis quidem illo
          quod natus tenetur tempore aliquam placeat quasi, distinctio cupiditate nam qui cumque facere possimus ullam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi est nostrum. Veritatis quidem illo
          quod natus tenetur tempore aliquam placeat quasi, distinctio cupiditate nam qui cumque facere possimus ullam.
        </div>
      </div>
    </div>
  );
}
