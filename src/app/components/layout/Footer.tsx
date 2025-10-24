function Footer() {
  return (
    <footer className="bg-(--bg-secondary) p-8 text-center border-t border-solid border-(--border)">
      <div className="container mx-auto text-center">
        <p className="text-(--text-secondary)">
          &copy; {new Date().getFullYear()} Doan Thanh Phuc. Built with passion
          and coffee ☕
        </p>
      </div>
    </footer>
  );
}

export default Footer;
