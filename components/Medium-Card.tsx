import Image from "next/image";
import Link from "next/link";

const MediumCard = ({ article }: { article: any }) => {
  return (
    <div className="mb-3 w-full">
      <Image src={article.thumbnail} alt={article.title} />
      <div>
        <div>{article.title}</div>
        <div className="text-muted">
          {new Date(article.pubDate).toLocaleDateString()}
        </div>
        <Link href={article.link} target="_blank">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MediumCard;
