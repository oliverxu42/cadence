import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useId, useState } from 'react';
import { Task } from '../interfaces/Task';

const AddModal = ({ tasks, setTasks }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [title, setTitle] = useState('');
  const [composer, setComposer] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTasks = [...tasks];
    const id = parseInt(useId());
    newTasks.push({ id, title, composer });
    setTasks(newTasks);
    setTitle('');
    setComposer('');
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        + Add Task
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed top-12 inset-x-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Add a piece to work on
                  </Dialog.Title>
                  <hr className="my-3" />
                  <form onSubmit={handleSubmit}>
                    <div className="mt-5 pl-1">
                      <label htmlFor="title">Title</label>
                    </div>
                    <input
                      className="border rounded-xl mt-2 p-3 mb-5 w-full h-10"
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div>
                      <label htmlFor="composer">Composer</label>
                    </div>
                    <input
                      className="border rounded-xl mt-2 p-3 mb-5 w-full h-10"
                      id="composer"
                      type="text"
                      value={composer}
                      onChange={(e) => setComposer(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      Add piece
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddModal;
