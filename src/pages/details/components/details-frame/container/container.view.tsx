import styles from './container.view.module.scss';

interface IFragmentProps {
  end?: boolean;
  children: any;
}

export const ContainerView: React.FC<IFragmentProps> = ({ end, children }) => (
  <div className={end ? styles.endFragment : styles.fragment}>{children}</div>
);
