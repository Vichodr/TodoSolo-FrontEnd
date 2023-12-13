// WishlistService.js

export const WishlistService = {
    wishlist: [],
  
    addToWishlist(product) {
      this.wishlist.push(product);
    },
  
    getWishlist() {
      return this.wishlist;
    },
  };
  