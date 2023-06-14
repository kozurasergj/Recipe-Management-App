import React, { useState } from 'react';
import { Col } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { IRecipe } from '../interfaces';
import cn from 'classnames';

const Recipe = ({ recipe }: any) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Recipe',
      children:
        <p>
          {recipe.recipe}
        </p>
    },
    {
      key: '2',
      label: 'Ingredients',
      children:
        <>
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <p key={index}>{ingredient}</p>
          ))}
        </>
    }
  ];


  return (
    <>
      <Col key={recipe.id} span={7}
        style={{
          boxShadow: '4px 4px 15px rgba(56, 56, 56, 0.6)'
        }}
      >
        <div
          style={{
            padding: '20px',  display: 'flex', flexDirection: 'column', gap: '30px'}}
          className={cn(isLiked && 'favorite')}
        >
          <h2 style={{ textAlign: 'center' }}>{recipe.title}</h2>
          <button onClick={handleLike} style={{ border: 'none', position: 'absolute', top: '-10px', left: '-10px', backgroundColor: 'transparent' }}>
            {isLiked ? <HeartFilled className='heard-checked' style={{ color: 'red', fontSize: '30px' }} /> : <HeartFilled style={{ color: 'rgb(21, 9, 70)', fontSize: '30px' }} />}
          </button>
          <img src={recipe.image} alt="dish" className='img' />
          <Collapse items={items} />
        </div>
      </Col>
    </>
  );
};

export default Recipe;
