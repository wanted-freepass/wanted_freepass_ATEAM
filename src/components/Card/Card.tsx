import React from 'react';
import Button from './Button';
import * as S from './Card.style';
import { LIST_DATA, ListData } from './data';
import { request } from 'http';

const Card = ({ ...requests }) => {
  console.log(requests);
  return (
    <S.CardContainer>
      <S.TitleWrap>
        <S.Title>{requests.title}</S.Title>
        <S.Consult>{requests.status}</S.Consult>
      </S.TitleWrap>
      <S.Customer>{requests.client}</S.Customer>
      <S.Date>{requests.due}까지 납기</S.Date>
      <S.Line />
      <S.InfoContainer>
        <S.InfoWrap>
          {LIST_DATA.map(({ id, title }: ListData) => {
            return <S.InfoTitle key={id}>{title}</S.InfoTitle>;
          })}
        </S.InfoWrap>
        <S.InfoWrap>
          <S.Info>{requests.count}개</S.Info>
          <S.Info>{requests.amount}개</S.Info>

          <S.InfoContent>
            {requests.material.map((item: any, index: number) => (
              <S.InfoCon key={index}>{item.toString()}</S.InfoCon>
            ))}
          </S.InfoContent>
          <S.InfoContent>
            {requests.method.map((item: any, index: number) => (
              <S.InfoCon key={index}>{item}</S.InfoCon>
            ))}
          </S.InfoContent>
        </S.InfoWrap>
      </S.InfoContainer>
      <Button />
    </S.CardContainer>
  );
};

export default Card;
