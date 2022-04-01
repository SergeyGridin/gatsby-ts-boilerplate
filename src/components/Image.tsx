import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Image = ({ media, className, style }: any) => {
  const isDynamicImage = Boolean(media.localFile);
  const alt = media.alternativeText || 'An image uploaded to Strapi';
  if (isDynamicImage) {
    return (
      <GatsbyImage
        className={className}
        style={style}
        imgStyle={{ objectFit: 'contain' }}
        image={getImage(media.localFile) as IGatsbyImageData}
        alt={alt}
      />
    );
  }

  // make image responsive
  // https://snowball.digital/blog/responsive-images-in-react-with-srcset

  const urlPrefix = `${process.env.GATSBY_STRAPI_URL || 'http://localhost:1337'}`;
  const small = `${urlPrefix}${media.formats.small.url} ${media.formats.small.width}w `;
  const medium = `${urlPrefix}${media.formats.medium.url} ${media.formats.medium.width}w `;
  const large = `${urlPrefix}${media.formats.large.url} ${media.formats.large.width}w `;

  return (
    <img
      src={small}
      alt={alt}
      style={style}
      className={className}
      srcSet={`${small}, ${medium}, ${large}`}
    />
  );
};

// Image.propTypes = {
//   media: mediaPropTypes,
//   className: PropTypes.string,
// };

export default styled(Image)`
  object-fit: contain;
`;
