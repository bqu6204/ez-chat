import { ReactElement, useState } from "react";

interface IUseLoadingPage {
  signals: unknown[];
}

const useLoadingPage = ({ signals }: IUseLoadingPage): [number] => {
  const [progress, setProgress] = useState<number>(0);

  // if one of the signal occur , then set progress to (100 / signals.length) * occured signal count

  return [progress];
};
