import React, { useState } from 'react';

const CalendarioPersonalizado: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Obtener la fecha de hoy (sin hora para comparación precisa)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (month: number, year: number): Date[] => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);

    // Hacer que la semana empiece en lunes
    let offset = firstDayOfMonth.getDay(); // 0 = domingo, ..., 6 = sábado
    offset = offset === 0 ? 6 : offset - 1; // Ahora 0 = lunes, ..., 6 = domingo

    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const days: Date[] = [];

    // Rellenar los días vacíos del inicio con días del mes anterior
    for (let i = 0; i < offset; i++) {
      days.push(new Date(year, month - 1, prevMonthLastDay - (offset - i - 1)));
    }

    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    // Rellenar hasta completar 42 días (6 semanas)
    let nextDay = 1;
    while (days.length < 42) {
      days.push(new Date(year, month + 1, nextDay));
      nextDay++;
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    if (
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      setSelectedDate(date);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      weeks.push(week);
    }

    return weeks.map((week, weekIndex) => (
      <tr key={weekIndex}>
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((_, idx) => {
          const day = week[idx]; // Accedemos al día por índice según el día de la semana
          if (!day) {
            return <td key={idx}></td>; // Si no hay día, dejamos celda vacía
          }

          const isCurrentMonth = day.getMonth() === currentDate.getMonth();
          const isToday =
            day.getFullYear() === today.getFullYear() &&
            day.getMonth() === today.getMonth() &&
            day.getDate() === today.getDate();

          const isSelected =
            selectedDate &&
            day.getDate() === selectedDate.getDate() &&
            day.getMonth() === selectedDate.getMonth() &&
            day.getFullYear() === selectedDate.getFullYear();

          return (
            <td
              key={idx}
              onClick={() => handleDateClick(day)}
              className={`text-center p-2 ${
                isCurrentMonth ? 'text-dark' : 'text-muted'
              } ${isSelected ? 'bg-primary text-white rounded-circle' : 'hover:bg-light cursor-pointer'}`}
              style={{
                width: '50px',
                height: '50px',
                fontWeight: isToday ? 'bold' : 'normal',
                textDecoration: isToday ? 'underline' : 'none',
                color: isToday ? '#0d6efd' : undefined,
              }}
            >
              {day.getDate()}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-secondary" onClick={goToPreviousMonth} aria-label="Mes anterior">
            
          </button>
          <h4 className="mb-0">
            {currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </h4>
          <button className="btn btn-outline-secondary" onClick={goToNextMonth} aria-label="Próximo mes">
            
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle mb-0">
            <thead>
              <tr>
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, idx) => (
                  <th key={idx} scope="col" className="text-primary">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
        </div>

        {selectedDate && (
          <div className="alert alert-success mt-3 mb-0" role="alert">
            Fecha seleccionada: <strong>{selectedDate.toDateString()}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarioPersonalizado;