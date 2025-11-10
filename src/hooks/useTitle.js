import React from "react";

export default function useTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}