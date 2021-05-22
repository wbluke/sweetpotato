import { Backdrop, createStyles, Fade, makeStyles, Modal, Theme } from '@material-ui/core';
import React from 'react';
import HorizonLine from '../../common/HorizonLine';
import modalTitleImage from '../../images/mei.png';

interface IInformationModal {
  open: boolean
  setOpen: (open: boolean) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '0.8rem',
      minWidth: '20rem',
      maxWidth: '50rem',
      margin: '0 3rem 0 3rem',
      [theme.breakpoints.down('sm')]: {
        margin: '0 2rem 0 2rem',
      },
    },
    modalTitleImage: {
      width: '3rem',
      float: 'left',
      [theme.breakpoints.down('sm')]: {
        width: '2.5rem',
      },
    },
    modalTitle: {
      fontFamily: 'GmarketSans Bold',
      fontSize: '2rem',
      float: 'left',
      margin: '1.7rem 0 0 2.2rem',
      [theme.breakpoints.down('sm')]: {
        margin: '1.7rem 0 0 1.8rem',
      },
    },
  }),
);

const InformationModal = ({ open, setOpen }: IInformationModal) => {
  const styles = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        disableEnforceFocus
        disableAutoFocus
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <div>
              <img
                className={styles.modalTitleImage}
                src={modalTitleImage}
                alt={"modalTitleImage"}
              />
              <span className={styles.modalTitle}>
                우아한 고구마
              </span>
            </div>
            <div>
              <HorizonLine
                padding="5.5rem 0 0 0"
              />
              <p>
                ✔️ 김봉진 의장님 감사합니다 🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️
              </p>
              <p>
                ✔️ 행사 시점의 실수령액과 다를 수 있으니 (ex. 세금), 단순 참고 자료로만 활용해 주세요.
              </p>
              <p>
                ✔️ 주식 거래 시간이 독일 기준이기 때문에, '실시간 주가'의 조회 시간이 현재 시각과 다소 차이가 날 수 있습니다.
              </p>
              <p>
                ✔️ '기준 정보'는 독일 금감원 최종 승인일 (2021년 3월 2일)을 기준으로 한 주가 정보입니다.
              </p>
              <p>
                ✔️ 결과 화면을 즐겨찾기에 등록하시면 매번 고구마 수를 입력하지 않아도 확인할 수 있어요 :)
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default InformationModal;
