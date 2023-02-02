import React from 'react';

// 体重・体脂肪率グラフ
interface Props {
  styles: string;
}

const BodyGraph = ({ styles }: Props) => {
  return (
    <picture>
      <img src='/images/main_graph.svg' alt='Main graph' className={styles} />
    </picture>
  );
};

export default BodyGraph;
