import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "../../api/unsplashApi.js";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  const [page, setPage] = useState(1);

  const loadMoreRef = useRef(null);

  const handleSearch = async (query) => {
    toast.success(`Searching for: ${query}`);
    setIsLoading(true);
    setQuery(query);
    setPage(1);
    setIsError(false);
    setImages([]);

    try {
      const { images } = await fetchImages(query, 1);
      setImages(images);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const response = await fetchImages(query, page + 1);
      const newImages = response.images;

      if (newImages.length === 0) {
        toast.info("No more images available.");
        setIsLoading(false);
        return;
      }

      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
    } catch {
      toast.error("Failed to load more images");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectImage(image);
  };

  const handleCloseModal = () => {
    setSelectImage(null);
  };

  const renderMessage = () => {
    if (isLoading) return null;
    if (isError) return <ErrorMessage />;
    if (!images.length && query !== "") {
      return <p>No images found</p>;
    }
    return null;
  };

  useEffect(() => {
    if (images.length > 0 && loadMoreRef.current) {
      loadMoreRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [images]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {renderMessage()}

      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {isLoading ? (
            <Loader />
          ) : (
            <LoadMoreBtn onLoadMore={handleLoadMore} ref={loadMoreRef} />
          )}
        </>
      )}

      {selectImage && (
        <ImageModal image={selectImage} onClose={handleCloseModal} />
      )}

      <Toaster position="top-right" />
    </div>
  );
}
