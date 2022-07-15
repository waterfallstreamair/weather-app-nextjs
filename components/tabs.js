import { useState, useCallback } from 'react'
import { Tab } from '@headlessui/react'

const classNames= (...classes) => classes.filter(Boolean).join(' ')

export const Tabs = ({ tabs, children, onChange }) => {
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const handleChange = useCallback(index => {
    setSelectedIndex(index)
    onChange(index)
  }, [onChange])
  
  return (
    <div className="w-full max-w-md mr-10 mb-5">
      <Tab.Group selectedIndex={selectedIndex} onChange={handleChange}>
        <Tab.List className="flex space-x-3 rounded-xl bg-blue-900/20 p-1 mx-0">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-400 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="ml-0 mt-2">
          {Object.values(tabs).map((e, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {idx == selectedIndex &&
                children
              }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
