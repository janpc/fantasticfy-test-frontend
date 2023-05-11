import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './product.module.css'
import parse from 'html-react-parser';
import { getAllProducts, getProductById } from '../../data'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import OptionSelector from '@/components/OptionSelector';
import UnitsLeft from '@/components/UnitsLeft';
import ImageCarousel from '@/components/ImageCarousel';

const inter = Inter({ subsets: ['latin'] })

export default function Product({title, body, images, options, variants}) {
  const [option, setOption] = useState(null);
  const [variant, setVariant] = useState({});
  const [shownImages, setShownImages] = useState(images)

  useEffect(() => {
    if (!option) {
      setOption(variants[0].title);
      setVariant(variants[0])
    } else if (option !== variant.title) {
      const newVariant = variants.find(variant => variant.title === option);
      setVariant(newVariant);
    }
  }, [option]);

  useEffect(() => {
    if (variants.length > 1 && variant.image_id !== null) {
      const imgs = images.filter(img => img.id === variant.image_id);
      setShownImages(imgs);
    } else {
      setShownImages(images);
    }
  }, [variant]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>{title}</h1>
        <ImageCarousel images={shownImages} />
        {body && <div>{parse(body)}</div>}
        <p>Price: {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(variant.price)}</p>
        <OptionSelector options={options} selectOption={setOption} selected={option}/>
        {variant.weigth && <p>Weigth: {variant.weigth}{variant.weight_unit}</p>}
        <UnitsLeft variant={variant} />
      </main>
    </>
  )
}

export async function getStaticProps({params}) {
  const { id } = params;
  const res = await getProductById(id);

  return {
    props: {...res},
  };
}

export async function getStaticPaths() {
  const res = await getAllProducts();

  const paths = res.map((p) => ({
    params: { id: p.id.toString() },
  }));
 
  return { paths, fallback: false };
}