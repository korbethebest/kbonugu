import * as styleX from "@stylexjs/stylex";

export const buttonStyles = styleX.create({
  base: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9',
      transform: 'scale(1.05)',
    },
    ':focus': {
      outline: 'none',
    },
  },
});

export const modalStyles = styleX.create({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1001,
    padding: '20px',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    ':active': {
      backgroundColor: '#ffffff',
    },
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  section: {
    marginBottom: '25px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#444',
  },
  paragraph: {
    marginBottom: '15px',
    lineHeight: '1.5',
    color: '#555',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '15px',
  },
  listItem: {
    marginBottom: '8px',
    lineHeight: '1.4',
    color: '#555',
  },
});
