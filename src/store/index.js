import create from "zustand";

const variantStore = create((set, get) => {
  return {
    selectedVariants: {
      Ch17_Hair: "",
      Ch17_Helmet: "",
      Ch17_Boots: "",
    },
    setSelectedVariants: (mesh, variant) => {
      set((state) => {
        return {
          selectedVariants: {
            ...state.selectedVariants,
            [mesh]: variant,
          },
        };
      });
    },
  };
});
export default variantStore;
