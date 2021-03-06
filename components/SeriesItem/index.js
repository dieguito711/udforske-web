import { Container } from "./styled";
import Image from "next/image";
import Link from "next/link";
const SeriesItem = ({ href, src, name, data }) => {
  return (
    <Container>
      <Link href={href}>
        <a>
          <div className="Content">
            <Image
            unoptimized={true}
              src={src}
              alt="serie"
              width={1646}
              height={1100}
            />
            <div className="Overlay">
              <div className="Text">{name}</div>
            </div>
          </div>
        </a>
      </Link>
    </Container>
  );
};

export default SeriesItem;
