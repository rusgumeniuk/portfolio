import { FC } from 'react';
import './Period.css';

interface PeriodProperties {
  startedDate: Date;
  endedDate: Date | null;
  localization: string;
}

const Period: FC<PeriodProperties> = ({
  startedDate,
  endedDate,
  localization,
}) => {
  const isCompleted = (date: Date | null): boolean =>
    date !== null && date <= new Date();

  const formatDate = (date: Date): string =>
    date.toLocaleString(localization, { month: 'long', year: 'numeric' });

  const formatFullDate = (date: Date): string =>
    date.toLocaleString(localization, {
      month: 'long',
      day: 'numeric',
      year: '2-digit',
    });

  return (
    <div className="period">
      <span className="date">
        <em>{formatDate(startedDate)}</em>
      </span>
      <span>-</span>
      {isCompleted(endedDate) ? (
        <span className="date">
          <em>{formatDate(endedDate!)}</em>
        </span>
      ) : (
        <span className="present-container">
          <em>present</em>
          {endedDate && (
            <div className="date-hint">Ends on {formatFullDate(endedDate)}</div>
          )}
        </span>
      )}
    </div>
  );
};

export default Period;
