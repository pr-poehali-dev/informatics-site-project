
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const MathConcepts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Шапка */}
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-primary-foreground mb-4 md:mb-0">
              Основы информатики
            </h1>
            <nav className="flex gap-4">
              <Button asChild variant="outline" className="bg-white/10 text-primary-foreground">
                <Link to="/">Главная</Link>
              </Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">О курсе</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Материалы</Button>
              <Button variant="outline" className="bg-white/10 text-primary-foreground">Контакты</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto px-4 py-10">
        <div className="mb-6">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link to="/">
              <ChevronLeft className="h-4 w-4" />
              Назад к темам
            </Link>
          </Button>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Математические основы информатики</h2>
          
          <div className="prose max-w-none mb-8">
            <p className="lead text-lg">
              Математические основы информатики включают в себя системы счисления, 
              логические основы ЭВМ, элементы теории множеств и математической логики.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Системы счисления</h3>
            <p className="mb-4">
              Система счисления — это способ записи чисел с помощью определённого набора символов 
              (цифр) и правил их интерпретации.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Позиционные системы счисления</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>В позиционных системах счисления вес цифры зависит от её позиции в записи числа. 
                     Основные системы: двоичная, восьмеричная, десятичная, шестнадцатеричная.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Непозиционные системы счисления</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>В непозиционных системах значение цифры не зависит от её позиции в числе. 
                     Пример: римская система счисления (I, V, X, L, C, D, M).</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Таблица перевода чисел между системами счисления:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Десятичная</th>
                      <th className="border px-4 py-2">Двоичная</th>
                      <th className="border px-4 py-2">Восьмеричная</th>
                      <th className="border px-4 py-2">Шестнадцатеричная</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">1</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">10</td>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">2</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">8</td>
                      <td className="border px-4 py-2">1000</td>
                      <td className="border px-4 py-2">10</td>
                      <td className="border px-4 py-2">8</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">10</td>
                      <td className="border px-4 py-2">1010</td>
                      <td className="border px-4 py-2">12</td>
                      <td className="border px-4 py-2">A</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">15</td>
                      <td className="border px-4 py-2">1111</td>
                      <td className="border px-4 py-2">17</td>
                      <td className="border px-4 py-2">F</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">16</td>
                      <td className="border px-4 py-2">10000</td>
                      <td className="border px-4 py-2">20</td>
                      <td className="border px-4 py-2">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Основы логики</h3>
            <p className="mb-4">
              Логика — наука о формах и способах мышления. В информатике используется 
              математическая (формальная) логика для моделирования работы компьютера.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Основные логические операции:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Операция</th>
                      <th className="border px-4 py-2">Обозначение</th>
                      <th className="border px-4 py-2">Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Отрицание (НЕ)</td>
                      <td className="border px-4 py-2">¬A, !A</td>
                      <td className="border px-4 py-2">Инвертирует значение</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Конъюнкция (И)</td>
                      <td className="border px-4 py-2">A ∧ B, A & B</td>
                      <td className="border px-4 py-2">Истинно, когда оба операнда истинны</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Дизъюнкция (ИЛИ)</td>
                      <td className="border px-4 py-2">A ∨ B, A | B</td>
                      <td className="border px-4 py-2">Истинно, когда хотя бы один операнд истинен</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Исключающее ИЛИ (XOR)</td>
                      <td className="border px-4 py-2">A ⊕ B, A ^ B</td>
                      <td className="border px-4 py-2">Истинно, когда операнды имеют разные значения</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Импликация</td>
                      <td className="border px-4 py-2">A → B</td>
                      <td className="border px-4 py-2">Ложно только когда A истинно, а B ложно</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Эквивалентность</td>
                      <td className="border px-4 py-2">A ↔ B</td>
                      <td className="border px-4 py-2">Истинно, когда операнды имеют одинаковые значения</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Таблицы истинности основных операций:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <table className="bg-white border">
                  <thead>
                    <tr>
                      <th className="border px-3 py-1">A</th>
                      <th className="border px-3 py-1">¬A</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">1</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">0</td>
                    </tr>
                  </tbody>
                </table>
                
                <table className="bg-white border">
                  <thead>
                    <tr>
                      <th className="border px-3 py-1">A</th>
                      <th className="border px-3 py-1">B</th>
                      <th className="border px-3 py-1">A ∧ B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">0</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">0</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">0</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">1</td>
                    </tr>
                  </tbody>
                </table>
                
                <table className="bg-white border">
                  <thead>
                    <tr>
                      <th className="border px-3 py-1">A</th>
                      <th className="border px-3 py-1">B</th>
                      <th className="border px-3 py-1">A ∨ B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">0</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">1</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">0</td>
                      <td className="border px-3 py-1">1</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">1</td>
                      <td className="border px-3 py-1">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-2xl font-bold mb-4">Задачи для закрепления</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Задача 1:</h4>
              <p className="mb-4">
                Перевести число 101101 из двоичной системы счисления в десятичную.
              </p>
              <Button>Смотреть решение</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Задача 2:</h4>
              <p className="mb-4">
                Построить таблицу истинности для выражения: A ∧ (B ∨ ¬C)
              </p>
              <Button>Смотреть решение</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О проекте</h3>
              <p className="text-gray-300">
                Наш сайт предоставляет учебные материалы по информатике для учащихся и преподавателей.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Разделы</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">Теория</Link></li>
                <li><a href="#" className="hover:text-white">Практика</a></li>
                <li><a href="#" className="hover:text-white">Тесты</a></li>
                <li><a href="#" className="hover:text-white">Глоссарий</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Учебники</a></li>
                <li><a href="#" className="hover:text-white">Видеоуроки</a></li>
                <li><a href="#" className="hover:text-white">Презентации</a></li>
                <li><a href="#" className="hover:text-white">Ссылки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-gray-300 mb-2">Email: info@informatika.ru</p>
              <p className="text-gray-300">Телефон: +7 (123) 456-78-90</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>© 2025 Основы информатики. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MathConcepts;
