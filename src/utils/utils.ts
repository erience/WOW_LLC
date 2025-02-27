export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then(() => {
      if (typeof window !== "undefined") {
        if (typeof (window as any).WOW === "function") {
          const WOW = (window as any).WOW;
          new WOW({ live: false }).init();
        } else {
          console.error("WOW is not found globally.");
        }
      }
    });
  }
};
